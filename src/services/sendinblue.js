import es6Promise from 'es6-promise';
import 'isomorphic-fetch';

es6Promise.polyfill();

export default {
  subscribe,
};

function subscribe(email) {
  const url = 'https://my.sendinblue.com/users/subscribeembed/js_id/349gf/id/1';
  return post(url, {
    email,
    form_url: 'yes',
    js_id: '349gf',
    listid: 5,
    hdn_email_txt: new Date().getTime(),
  });
}

function post(url, data) {
  const formData = new FormData();
  Object.keys(data).forEach(key => formData.append(key, data[key]));
  console.log(formData);

  return fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
    body: formData,
    mode: 'no-cors',
  });
}
