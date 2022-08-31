import React from 'react';
import { SafeAreaView } from 'react-native';
import { showModal } from '../../services/app';
import { ListItem } from '../ListItem';
import { Text } from '../Text';
export function showActionSheet(props) {
    const cancelButton = props.buttons.find(b => b.style == 'cancel');
    const otherButtons = props.buttons.filter(b => b !== cancelButton);
    showModal(d => (<SafeAreaView>
        {props.title && (<ListItem style={{ marginHorizontal: 16, flexDirection: 'column' }} type="action" isFirst rounded>
            <Text h5 style={{ textAlign: 'center' }}>
              {props.title}
            </Text>
            {props.subtitle && (<Text p4 style={{ textAlign: 'center' }}>
                {props.subtitle}
              </Text>)}
          </ListItem>)}
        {otherButtons.map((b, i) => (<ListItem key={i} style={{ marginHorizontal: 16 }} title={b.text} onPress={() => {
                d();
                b.onPress?.();
            }} type={b.style ?? 'action'} isFirst={i == 0 && !props.title} isLast={i == otherButtons.length - 1} rounded/>))}
        <ListItem title={cancelButton?.text ?? 'Cancel'} onPress={d} style={{ marginHorizontal: 16, marginTop: -16, marginBottom: 0 }} type="cancel" isFirst isLast rounded/>
      </SafeAreaView>), { position: 'bottom' });
}
