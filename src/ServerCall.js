const url = "https://crudcrud.com/api/11e0909725cb47649bd825a5a6f7fa0e/tasks";

export const getTasksServer = () => {
  return fetch(url, {
    method: "GET"
  }).then(response => response.json());
};

export const getTaskServer = task => {
  return fetch(`${url}/${task._id}`, {
    method: "GET"
  }).then(response => response.json());
};

export const postTaskServer = newTask => {
  return fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(newTask)
  }).then(response => response.json());
};

export const updateTaskServer = ({ _id, ...rest }) => {
  console.log('update function start')
  return fetch(`${url}/${_id}`, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(rest)
  }).then(response => {
    if (response.status !== 200) {
      console.log("error updating");
    }
  });
};

export const deleteTaskServer = task => {
  return fetch(`${url}/${task._id}`, {
    method: "DELETE",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(task)
  });
  // .then(console.log("deleted"));
};
