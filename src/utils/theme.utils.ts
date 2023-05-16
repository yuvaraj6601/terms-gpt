let isDark = true;

const Light = {
  primaryDarkColor: '#41313E',
  primaryLightColor: '#E7B10A',
  primaryDarkText: '#0B162B',
  primaryLightText: '#B5B5B5',
  secondaryDarkColor: '#E73F3F',
  secondaryLightColor: '#FFF4EF',
  secondaryDarkText: '#F16722',
  secondaryLightText: '#8E8E93',
  background: '#F8F9FB',
  secondaryBackground: '#F0F5FF',
  inputBackground: '#F2F4F7',
  buttonTextColor: '#FFFFFF',
  outline: '#F1F1F4',
  focusOutLine: '#C9C9C9',
  otpOutLine: '#EBEBEB',
  cancel: '#E73F3F',
  primaryButtonColor: '#2196F3',
  errorBackground: '#FF6D60',
  warningBackground: '#F7D060',
  successBackground: '#00A124',
};

const Dark = {
  primaryDarkColor: '#41313E',
  primaryLightColor: '#E7B10A',
  primaryDarkText: '#0B162B',
  primaryLightText: '#B5B5B5',
  secondaryDarkColor: '#F16722',
  secondaryLightColor: '#FFF4EF',
  secondaryDarkText: '#F16722',
  secondaryLightText: '#8E8E93',
  background: '#F8F9FB',
  secondaryBackground: '#F0F5FF',
  inputBackground: '#F2F4F7',
  buttonTextColor: '#FFFFFF',
  outline: '#F1F1F4',
  focusOutLine: '#CFCFCF',
  otpOutLine: '#EBEBEB',
  cancel: '#E73F3F',
  primaryButtonColor: '#2196F3',
  errorBackground: '#FF6D60',
  warningBackground: '#F7D060',
  successBackground: '#00A124',
};

export default isDark ? Dark : Light;
