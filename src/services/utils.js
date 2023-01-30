export function convertDate(result) {
  if (result.data.length > 1) {
    let mails = result.data;
    mails.map((mail) => {
      let fullDate = new Date(mail.createdAt);
      let newDate = fullDate.toLocaleDateString();
      mail.createdAt = newDate;
    });
  }
}
