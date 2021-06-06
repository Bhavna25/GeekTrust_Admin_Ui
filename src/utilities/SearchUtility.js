export const searchInUsers = (search, users) => {
  let tempSearch = search.toLowerCase();
  return users.map((user) => {
    if (
      user.name.toLowerCase().includes(tempSearch) ||
      user.email.toLowerCase().includes(tempSearch) ||
      user.role.toLowerCase().includes(tempSearch)
    ) {
       user.show = true;
       return user;
    }
    user.show = false;
    return user;
  });
};
