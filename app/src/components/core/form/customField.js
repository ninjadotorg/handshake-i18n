import React from 'react';
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledButtonDropdown } from 'reactstrap';
import Cleave from 'cleave.js/react';
import cx from 'classnames';
import './styles.scss';
// import phoneCountryCodes from './country-calling-codes.min.json';
import SelectCountryCode from './components/SelectCountryCode';

const customField = element => ({
  input,
  meta: { touched, error, warning },
  elementPrepend,
  elementAppend,
  className,
  ...rest
}) => {
  const { name, onChange, value } = input;
  let newClassName = '';
  if (touched) {
    if (error) newClassName = 'has-error';
    else if (warning) newClassName = 'has-warning';
  }

  const allElements = [];
  if (elementPrepend) allElements.push(React.cloneElement(elementPrepend, { key: 0 }));
  allElements.push(React.createElement(element, {
    ...rest, ...input, key: 1, className: cx(className, newClassName),
  }));
  if (elementAppend) allElements.push(React.cloneElement(elementAppend, { key: 4 }));
  allElements.push(touched &&
    ((error && <span key={2} className="w-100 text-danger text-left">{error}</span>) ||
      (warning && <span key={3} className="w-100 text-warning text-left">{warning}</span>)));
  return allElements;
};

export const fieldInput = customField('input');
export const fieldDropdown = customField(({
  onChange, value, list, defaultText = 'Select an item',
}) => {
  let txtSelectedItem = defaultText;
  const selectedItem = list.find(i => i.id === value.id);

  if (selectedItem) {
    txtSelectedItem = selectedItem.text;
  }
  return (
    <UncontrolledButtonDropdown className="btn-block">
      <DropdownToggle caret color="light" block>
        {txtSelectedItem}
      </DropdownToggle>
      <DropdownMenu>
        {
            list.map((item) => {
              return (
                <DropdownItem
                  key={item.id}
                  onClick={() => onChange(item)}
                >
                  {item.text}
                </DropdownItem>
              );
            })
          }
      </DropdownMenu>
    </UncontrolledButtonDropdown>
  );
});

// type = tab|radio-big|default
export const fieldRadioButton = customField(({
  onChange, value, list, name, color = '', styleButton = {}, type
}) => {
  let containerClass = '';
  let fullWidth = false;
  let hasPrefixIcon = false;
  switch (type) {
    case 'tab':
      containerClass = 'tab';
      fullWidth = true;
      hasPrefixIcon = false;
      break;
    case 'tab-1':
      containerClass = 'tab-1';
      hasPrefixIcon = false;
      fullWidth = true;
      break;
    case 'tab-2':
      containerClass = 'tab-2';
      fullWidth = true;
      hasPrefixIcon = true;
      break;
    case 'tab-3':
      containerClass = 'tab-3';
      fullWidth = true;
      hasPrefixIcon = false;
      break;
    case 'tab-4':
      containerClass = 'tab-4';
      fullWidth = true;
      hasPrefixIcon = true;
      break;
    case 'radio-big':
      containerClass = 'big';
      hasPrefixIcon = false;
      break;
    default:
      hasPrefixIcon = true;
      containerClass = 'default';
  }
  return (
    <span style={{ width: fullWidth ? '100%' : '' }}>
    {
      list.map((item, index) => {
        const { value: itemValue, text, icon, hide } = item;
        if (hide) return null;
        const isChecked = itemValue === value;
        return (
          <div key={index} className={cx('radio-container', containerClass)} style={fullWidth ? { width: `${100 / list.length}%` } : {}}>
            <input
              type="radio"
              name={name}
              checked={isChecked}
              readOnly
            />
            <button
              type="button"
              className="btn"
              onClick={() => onChange(itemValue)}
              style={{ color, minWidth: '58px', ...styleButton }}
            >
              {/*<span style={{ fontSize: '28px' }}>&sdot;</span> */}
              {
                hasPrefixIcon && (<span>{icon || <span>&#x25cf;</span>}&nbsp;</span>)
              }
              {text}
            </button>
          </div>
        );
      })
    }
    </span>
  )
});

export const fieldNumericInput = customField(({
  onChange, onBlur, onFocus, value, list, name, color = '', step = 0.25, suffix, btnBg = ''
}) => {
  const valueFloat = parseFloat(value || 0, 10);
  return (
    <span className="btn-group" role="group" style={{ color }}>
      <button type="button" className="btn numeric-input" style={{ color }} onClick={() => onChange(valueFloat - step)} onBlur={() => onBlur()} onFocus={() => onFocus()}>–</button>

      <span className="text-center" style={{ minWidth: '70px', lineHeight: '36px' }}>
        {value}{ suffix && <span>{suffix}</span>}
      </span>

      <button type="button" className="btn numeric-input" style={{ color }} onClick={() => onChange(valueFloat + step)} onBlur={() => onBlur()} onFocus={() => onFocus()}>+</button>
    </span>
  );
});

export const fieldCleave = customField(({
  onChange, onBlur, onFocus, value, propsCleave, className,
}) => (
  <Cleave
    {...propsCleave}
    onChange={e => onChange(e.target.rawValue)}
    onBlur={onBlur}
    onFocus={onFocus}
    value={value}
    className={className}
  />
));

export const fieldPhoneInput = customField(({
  onChange, onBlur, onFocus, value, propsCleave, className, placeholder, color
}) => {
  const splittedNumbers = value.split('-');
  let countryCode = '';
  let phoneNumber = '';
  if (splittedNumbers.length === 1) {
    countryCode = '';
    phoneNumber = splittedNumbers[0];
  } else {
    countryCode = splittedNumbers[0];
    phoneNumber = splittedNumbers[1] || '';
  }
  return (
    <span>
      <span style={{ display: 'table-cell' }}>
        <SelectCountryCode countryCode={countryCode} onChange={newCountryCode => onChange(`${newCountryCode}-${phoneNumber}`)} color={color} />
      </span>
      <span style={{ display: 'table-cell' }} className="pl-2"><input type="tel" placeholder={placeholder} className="form-control-custom form-control-custom-ex w-100 input-no-border" value={phoneNumber} onChange={e => onChange(`${countryCode}-${e.target.value}`)} /></span>
    </span>
  );
});

export default customField;
