"use server";

export const handleRegister = async (data: FormData) => {
  const response = await fetch(`localhost:8000/api/v1/register`, {
    method: "posts",
    body: data,
  });

  return await response.json();
};
