// import { firestore } from "./firebase"
// import { collection, getDocs } from "firebase/firestore"; 
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// const getContractors = async () => {
//   const snapshot = await getDocs(collection(firestore, "contractors"))
//   snapshot.forEach((doc) => {
//     console.log(`${doc.id} => ${doc.data()}`);
//   })
// }

// export { getContractors }


import { firestore } from "./firebase"

// const getContractors = async () => {
//   const snapshot = await firestore.collection("users").get()
//   snapshot.docs.forEach(doc => console.log(doc.data()))
// }

async function getContractors() {
  const contractorsCol = collection(firestore, 'contractors');
  const contractorsSnapshot = await getDocs(contractorsCol);
  const contractorsList = contractorsSnapshot.docs.map(doc => doc.data());
  console.log(contractorsList)
}

export { getContractors }