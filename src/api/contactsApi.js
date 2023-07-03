import axios from 'axios';

const URL = 'https://64a29462b45881cc0ae56182.mockapi.io';

export const fetchContacts = async () => {
  const { data } = await axios.get(`${URL}/contacts`);

  return data;
};

export const addContact = async ({ name, number: phone }) => {
  const { data } = await axios.post(`${URL}/contacts`, { name, phone });

  return data;
};

export const deleteContact = async id => {
  const { data } = await axios.delete(`${URL}/contacts/${id}`);

  return data;
};
