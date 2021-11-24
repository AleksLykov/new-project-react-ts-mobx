declare namespace User {
  interface UserInfo {
    id: number;
    organizationId: number;
    roleCode: string;
    lastName: string;
    firstName: string;
    middleName: string;
    phone: string;
    mail: string;
    position: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    userFileLocationDocuments: never[];
  }
}

export default User;
