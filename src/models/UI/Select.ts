export interface SelectOption {
  label: string;
  value: string;
}

class SelectProps {
  label: string;
  name: string;
  options: SelectOption[];
  onValueChanged: (value: string) => void;

  constructor(
    label: string,
    name: string,
    options: SelectOption[],
    onValueChanged: (value: string) => void
  ) {
    this.label = label;
    this.name = name;
    this.options = options;
    this.onValueChanged = onValueChanged;
  }
}

export default SelectProps;
