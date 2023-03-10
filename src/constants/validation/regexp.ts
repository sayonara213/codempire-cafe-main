export const REGEXPS = {
  username: /^[aA-zZ\s]*$/,
  email:
    /^(([^<>()\]\\.!#$%&’*+=?^{|}~,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,
  phone: /^(\+\d{1,3}[- ]?)?\d{10}$/,
};
