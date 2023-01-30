export const curUserDataSelector = (store) => store.main.curentUserData;
export const usernameSelector = (store) => store.main.usernameInput;
export const isInputErrorSelector = (store) => store.main.isInputError;
export const usersSelector = (store) => store.main.users;
export const isShowMailBodySelector = (store) => store.main.isShowMailBody;

export const isHasNewMailSelector = (store) => store.main.isHasNewMail;

export const notifStateSelector = (store) => store.main.notificationState;

//Mails
export const mailsSelector = (store) => store.main.mails;
export const curMailDataSelector = (store) => store.main.curMailData;

export const curMailUserIdSelector = (store) => store.main.curMailUserId;
export const curMailRecipSelector = (store) => store.main.curMailRecipient;

export const curMailSenderSelector = (store) => store.main.curMailSender;
export const curMailSubjSelector = (store) => store.main.curMailSubj;

export const curMailBodySelector = (store) => store.main.curMailBody;
