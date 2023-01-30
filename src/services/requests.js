import Service from "./services";
export function sendMail(e, sender, subj, mailBody, UserId) {
  e.preventDefault();
  try {
    Service.sendMail({
      sender: sender,
      subj: subj,
      mailBody: mailBody,
      UserId: UserId,
    });
  } catch (err) {
    console.log(err);
  }
}
