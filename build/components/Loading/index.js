import React, { useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { colors } from '../../services/style';
import { showModal } from '../../services/app';
import { showAlert } from '../Alert';
export function useLoadingModal({ loading, error }) {
    useEffect(() => {
        if (!loading) {
            return;
        }
        let dismiss;
        showModal(d => {
            dismiss = d;
            return <ActivityIndicator size="large" color={colors.white}/>;
        }, { position: 'center', disableBackHandler: true });
        function tryDismiss() {
            dismiss ? dismiss() : setTimeout(tryDismiss, 200);
        }
        return tryDismiss;
    }, [loading]);
    useEffect(() => {
        error && showAlert('Error', error);
    }, [error]);
}
