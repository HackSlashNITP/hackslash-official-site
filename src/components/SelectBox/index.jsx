"use client";

import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[0px]",
};

const variants = {
  fill: {
    black_900: "bg-black-900 shadow-xs text-white-a700_01",
  },
};

const sizes = {
  xs: "h-[40px] pl-1 text-[24px]",
};

const SelectBox = React.forwardRef(
  (
    {
      children,
      className = "",
      options = [],
      isSearchable = false,
      isMulti = false,
      indicator,
      shape,
      variant = "fill",
      size = "xs",
      color = "black_900",
      ...restProps
    },
    ref
  ) => {
    const [menuPortalTarget, setMenuPortalTarget] = React.useState(null);

    React.useEffect(() => {
      setMenuPortalTarget(document.body);
    }, []);

    return (
      <>
        <Select
          ref={ref}
          options={options}
          className={`${className} flex ${shape && shapes[shape]} ${
            size && sizes[size]
          } ${variant && variants[variant]?.[color]}`}
          isSearchable={isSearchable}
          isMulti={isMulti}
          components={{
            IndicatorSeparator: () => null,
            ...(indicator && { DropdownIndicator: () => indicator }),
          }}
          styles={{
            indicatorsContainer: (provided) => ({
              ...provided,
              padding: undefined,
              flexShrink: undefined,
              width: "max-content",
              "& > div": { padding: 0 },
            }),
            container: (provided) => ({
              ...provided,
              zIndex: 0,
              alignItems: "center",
            }),
            control: (provided) => ({
              ...provided,
              backgroundColor: "transparent",
              border: "0 !important",
              boxShadow: "none !important",
              minHeight: "auto",
              width: "100%",
              flexWrap: undefined,
              "&:hover": {
                border: "0 !important",
              },
            }),
            input: (provided) => ({
              ...provided,
              color: "inherit",
            }),
            option: (provided, state) => ({
              ...provided,
              display: "flex",
              minWidth: "max-content",
              width: "100%",
              backgroundColor: state.isSelected ? "#00ff9d" : "transparent",
              color: state.isSelected ? "#000000" : "inherit",
              "&:hover": {
                backgroundColor: "#00ff9d",
              },
              color: "#000000",
            }),
            singleValue: (provided) => ({
              ...provided,
              display: "flex",
              marginLeft: undefined,
              marginRight: undefined,
            }),
            valueContainer: (provided) => ({
              ...provided,
              padding: 0,
              display: "flex",
              flexWrap: undefined,
            }),
            placeholder: (provided) => ({
              ...provided,
              margin: 0,
            }),
            menuPortal: (base) => ({ ...base, zIndex: 999999 }),
            menu: (base) => ({
              ...base,
              minWidth: "max-content",
              width: "max-content",
            }),
          }}
          menuPortalTarget={menuPortalTarget}
          closeMenuOnScroll={(event) => event.target.id === "scrollcontainer"}
          {...restProps}
        />
        {children}
      </>
    );
  }
);

SelectBox.propTypes = {
  className: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
  isSearchable: PropTypes.bool,
  isMulti: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.any,
  indicator: PropTypes.node,
  shape: PropTypes.oneOf(["square"]),
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["black_900"]),
};

export { SelectBox };
