import React, { useEffect, useMemo } from 'react';
import { ActivityIndicator } from 'react-native';
import { strings } from '../../services/language';
import { colors } from '../../services/style';
import { showAlert } from '../Alert';
import { showModal } from '../Modal';
export function useLoadingModal(api) {
    const state = useMemo(() => ({
        loading: api.loading,
        dismiss: undefined,
    }), []);
    useEffect(() => {
        if (api.loading && !state.loading) {
            state.loading = true;
            showModal(dismiss => {
                state.dismiss = dismiss;
                return <ActivityIndicator size="large" color={colors.white}/>;
            }, { position: 'center', disableBackHandler: true });
        }
        else if (!api.loading && state.loading) {
            state.loading = false;
            function tryDismiss() {
                if (!state.dismiss) {
                    setTimeout(tryDismiss, 200);
                }
                else {
                    state.dismiss();
                    state.dismiss = undefined;
                }
            }
            tryDismiss();
            if (api.error) {
                showAlert(strings('Error'), api.error);
            }
        }
    });
}
