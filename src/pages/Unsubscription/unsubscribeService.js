import $ from 'jquery';

export default async () => {
  const formData = $('.UnsubscriptionPage_content_form')
    .first()
    .serialize();
  const { result } = await $.ajax({
    url: 'https://my.sendinblue.com/users/unsubscribeembed/js_id/349gf/id/2',
    data: formData,
    dataType: 'json',
    type: 'POST',
  });
  if (result.result === 'success') {
    return { error: false, message: result.succcess_msg };
  }
  return { error: true, message: "Cette adresse email n'est pas reconnue." };
};
