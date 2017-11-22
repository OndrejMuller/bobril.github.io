import * as b from 'bobril';
import * as colors from '../colors';
import * as styles from '../styles';

export const iconDim = 40;
export const panelWidth = 320;
export const panelHeight = 160;
export const iconTextMaring = 22;

export const iconStyle = b.styleDef({
    width: `${iconDim}px`,
    height: `${iconDim}px`,

    marginBottom: 40
});

export const labelStyle = b.styleDef([
    {
        color: colors.color02
    },
    styles.menutext01b
]);

export const textStyle = b.styleDef([
    {
        color: colors.color02,
        marginTop: 12
    },
    styles.smalltext01
]);

export const leftContainer = b.styleDef({
    cssFloat: 'left',
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 20
});

export const rightContainer = b.styleDef({
    cssFloat: 'right',
    textAlign: 'left',
    width: `calc(100% - ${iconTextMaring + iconDim + 40}px)`,
    marginTop: 20,
    marginRight: 20,
    marginBottom: 20
});

export const panelStyle = b.styleDef({
    width: `${panelWidth}px`,
    height: `${panelHeight}px`,
    background: colors.color04,
    overflow: 'auto',
    boxShadow: '0px 0px 5px 6px rgba(0, 0, 0, 0.1)'
});