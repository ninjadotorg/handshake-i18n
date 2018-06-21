import React from 'react';
import PropTypes from 'prop-types';

class DropdownInput extends React.PureComponent {
  static propTypes = {
    list: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    onRef: PropTypes.func,
    checkError: PropTypes.bool,
    className: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    meta: PropTypes.object,
    onBlur: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.showList = ::this.showList;
    this.searchBoxChange = ::this.searchBoxChange;
    this.selectValue = ::this.selectValue;
    this.handleBodyClick = ::this.handleBodyClick;
    this.close = ::this.close;

    this.state = {
      showList: false,
    };
  }


  componentDidMount() {
    document.body.addEventListener('click', this.handleBodyClick, false);
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.handleBodyClick, false);
  }

  close() {
    this.setState({ showList: false });
  }

  handleBodyClick(e) {
    if (e.target.id !== `${this.props.name}-search-box`) {
      this.close();
    }
  }

  showList() {
    this.setState({ showList: !this.state.showList });
  }

  searchBoxChange() {
    const query = this.searchRef.value.toLowerCase().trim();
    const liTag = this.menuRef.children;
    for (let i = 1, len = liTag.length; i < len; i++) {
      let spanTag = liTag[i];
      if (spanTag.innerHTML.toLowerCase().indexOf(query) > -1) {
          liTag[i].style.display = '';
      } else {
          liTag[i].style.display = 'none';
      }
    }
  }

  selectValue(e) {
    if (e.keyCode == 13) {
      e.preventDefault();
    }
  }

  render() {
    const { name, onRef, value, list, checkError, className, placeholder, meta, ...props } = this.props;

    this.inRef = onRef || ((div) => this.inputRef = div);

    let errorClass = '';
    if (checkError && meta.error) {
      errorClass = 'input-error';
    }

    return (
      <div className="dropdown-input-container">
        <button className={`form-control ${errorClass} ${className || ''} ${value ? '' : 'holder' }`} type="button" onClick={this.showList}>
          {value || placeholder}
        </button>
        <input
          autoFocus="true"
          type="hidden"
          name={name}
          {...props}
          ref={this.inRef}
          value={value}
          className={`form-control ${errorClass} ${className || ''}`}
          placeholder={placeholder || ''}
          onClick={(e) => this.showList(e)}
        />
        <ul style={{ display: (this.state.showList ? 'block' : 'none') }} ref={(div) => this.menuRef = div}>
          <li className="search">
            <input
              id={`${name}-search-box`}
              className="form-control"
              ref={(div) => {
                this.searchRef = div;
                if (this.searchRef) this.searchRef.focus();
              }}
              type="search"
              autoComplete="off"
              onChange={this.searchBoxChange}
              onKeyDown={this.selectValue}
            />
          </li>
          {
            list.map((item, index) => (
              <li key={index} data-value={item.value} onClick={(e) => this.props.onChange(item.value)}>
                {item.value}
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default DropdownInput;
