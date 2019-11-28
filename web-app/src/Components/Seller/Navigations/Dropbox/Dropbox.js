import React from 'react';
import { ToggleLayer } from 'react-laag';
import { AnimatePresence } from 'framer-motion';
import ResizeObserver from 'resize-observer-polyfill';

import composeRefs from './composeRefs';
import Menu, { MenuItem } from './Menu';

const PopoverMenu = React.forwardRef(function PopoverMenu(props, ref) {
  return (
    <ToggleLayer
      ResizeObserver={ResizeObserver}
      renderLayer={propsitem => {
        return (
          <AnimatePresence>
            {propsitem.isOpen ? (
              <Menu
                ref={propsitem.layerProps.ref}
                style={propsitem.layerProps.style}
                arrowStyle={propsitem.arrowStyle}
                layerSide={propsitem.layerSide}
              >
                {props.items.map(itemlist => {
                  return (
                    <MenuItem key={itemlist.id} onClick={props.func}>
                      {itemlist.itemName}
                    </MenuItem>
                  );
                })}
              </Menu>
            ) : null}
          </AnimatePresence>
        );
      }}
      closeOnOutsideClick
      closeOnDisappear='partial'
      placement={{
        anchor: 'BOTTOM_CENTER',
        autoAdjust: true,
        snapToAnchor: false,
        triggerOffset: 12,
        scrollOffset: 16,
        preferX: 'RIGHT'
      }}
    >
      {({ isOpen, triggerRef, toggle }) => (
        <div
          ref={composeRefs(triggerRef, ref)}
          onClick={toggle}
          style={props.style}
        >
          {isOpen ? props.title : props.title}
        </div>
      )}
    </ToggleLayer>
  );
});

export default PopoverMenu;
