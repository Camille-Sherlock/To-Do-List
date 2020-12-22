import update from "immutability-helper";
import apis from "../http/api";

/**
 * Get the list of todo items.
 * @return {Array}
 */
export function getAll() {
  // let {id} = useParams()
  // const accountInfo = useSelector(selectAccountInfo)
  // const dispatch = useDispatch()
  // let todoList = [];

  apis.getList().then((res) => {
    return res;
  });
  console.log(`*******todoListStart`);
  // console.log(todoList);
  console.log(`*******todoListEnd`);
  return [
    {
      id: 1,
      text: "Learn Javascript",
      completed: false,
    },
    {
      id: 2,
      text: "Learn React",
      completed: false,
    },
    {
      id: 3,
      text: "Build a React App",
      completed: false,
    },
  ];
}

export function getItemById(itemId) {
  return getAll().find((item) => item.id === itemId);
}

export function updateStatus(items, itemId, completed) {
  let index = items.findIndex((item) => item.id === itemId);

  // Returns a new list of data with updated item.
  return update(items, {
    [index]: {
      completed: { $set: completed },
    },
  });
}

let todoCounter = 1;

function getNextId() {
  return getAll().length + todoCounter++;
}

export function addToList(list, data) {
  let item = Object.assign(
    {
      id: getNextId(),
    },
    data
  );

  return list.concat([item]);
}
