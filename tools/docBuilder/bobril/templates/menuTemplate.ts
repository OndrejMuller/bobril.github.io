import * as colors from '../../../../src/components/colors';

export function generateMenu(nodes): string {
    const output = [];
    nodes.forEach((node) => {
        output.push(generateMenuFromNode(node));
    });
    console.log(output.join(','))
    return output.join(',');
}

function generateMenuFromNode(node): string {
    if (node.children !== undefined && node.children.length > 0) {

        const childrenContent = [];
        for (let i = 1; i < node.children.length; i++) {
            childrenContent.push(generateMenuFromNode(node.children[i]));
        }

        const firstChildrenMetadata = node.children[0].metadata;

        return `
            {
                tag: 'ul',
                className: 'menu-block',
                style : {
                    paddingLeft: 16    
                },
                children: [
                    ${generateMenuItem(
                    {
                                tagClass: '\'menu-block-header\'',
                                listStyle: 'none',
                                menuAnchor: firstChildrenMetadata.menuAnchor,
                                label: firstChildrenMetadata.menuLabel,
                                color: colors.color04,
                                moveLeftUnit: 28,
                                shouldMoveLeft: true,
                                fontSize: 18,
                                lineHeight: 18
                            }
                        )
                    },
                    {
                        tag: 'ul',
                        className: 'menu-sub-block',
                        style: {
                            paddingLeft: 16
                        },
                        children: [
                            ${childrenContent.join(',')}
                        ]
                    }
                ] 
            }`;
    }

    let metadata = node.metadata;

    return generateMenuItem({
        tagClass: '\'menu-sub-block-item\'',
        menuAnchor: metadata.menuAnchor,
        listStyle: 'disc',
        moveLeftUnit: 0,
        shouldMoveLeft: false,
        label: metadata.menuLabel,
        color: colors.color03,
        fontSize: 15,
        lineHeight: 15
    });
}

function generateMenuItem(menuItemCfg) {
    return `
        {
            tag: 'li',
            children:  {
                tag: 'a',
                className: ${menuItemCfg.tagClass},
                children: '${menuItemCfg.label}',
                style: {
                    textDecoration: 'none',
                    color: '${menuItemCfg.color}',
                    fontSize: '${menuItemCfg.fontSize}px',
                    cursor: 'pointer'
                }, 
                component: {
                    onClick: () => {
                        var e = document.getElementById('${menuItemCfg.menuAnchor}');
                        if (e === undefined || e === null) {
                            console.warn('Cannot find element with id:', '${menuItemCfg.menuAnchor}');
                            return;
                        }
                        var offsetTop = e.offsetTop - 70; // Header compensation + 10px
                        window.scrollTo(0, offsetTop);
                    }
                }
            },
            style: {
                width: '150px',
                margin: 'auto',
                marginLeft: ${menuItemCfg.shouldMoveLeft && menuItemCfg.moveLeftUnit},
                listStyle:  '${menuItemCfg.listStyle}',
                lineHeight: '${menuItemCfg.lineHeight}px'
            }
        }
    `;
}