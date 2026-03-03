import React from "react";

function User({ params }: { params: { id: string } }) {
  const { id } = params;
  return <div>{id}</div>;
}

export default User;
