import React, { FC } from "react";

interface Props {
  accounts: Account[];
}

const ProjectAccounts: FC<Props> = ({ accounts }) => {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="font-bold text-xl">Demo Account{accounts.length > 1 ? "s" : ""}</h1>
      {accounts.map((account, index) => (
        <div key={`account-${index}`}>
          <p>Email: {account.email}</p>
          <p>Password: {account.password}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectAccounts;
