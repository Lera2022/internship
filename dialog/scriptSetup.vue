const $q = useQuasar();

function deleteUser(user: any) {
$q.dialog({
component: DeleteDialog,
componentProps: {
headerText: upperFirst(t('do you really want to remove this user?')),
items: [user.displayName]
}
}).onOk(async () => {
isLoading.value = true;
await deleteUserRequest(user.id)
.then(() => {
users.value = null;
return null;
})
.catch((err) => err);
isLoading.value = false;
});
}