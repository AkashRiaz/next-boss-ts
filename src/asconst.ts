// as const assertion

// enum UserRoles {
//   Admin = "Admin",
//   Editor = "Editor",
//   Viewer = "Viewer",
// }

const UserRoles = {
  Admin: "Admin",
  Editor: "Editor",
  Viewer: "Viewer",
} as const;


// typeof UserRoles;

const canEdit = (role: keyof typeof UserRoles) => {
  if (role === UserRoles.Admin || role === UserRoles.Editor) {
    return true;
  } else {
    return false;
  }
};


const result = canEdit(UserRoles.Admin)

console.log(result)
