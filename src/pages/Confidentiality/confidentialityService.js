import $ from 'jquery';

export default async () => {
  const formData = $('.ConfidentialityPage_content_form')
    .first()
    .serialize();
  const { result } = await $.ajax({
    url: 'https://my.sendinblue.com/users/subscribeembed/js_id/349gf/id/1',
    data: formData,
    dataType: 'json',
    type: 'POST',
  });
  if (result.result === 'success') {
    return { error: false, message: result.succcess };
  }
  if (result.result === 'invalid_request' || result.result === 'invalidEmail') {
    return { error: true, message: result.invalid_err_msg };
  }
  if (result.result === 'emailExist') {
    return { error: true, message: result.exist_err_msg };
  }
  return { error: true, message: "Une erreur s'est produite." };
};
