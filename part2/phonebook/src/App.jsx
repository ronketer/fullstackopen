import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchedName, setSearchedName] = useState("");

  const hook = () => {
    console.log("effect");

    // send request to json server
    const promise = axios.get("http://localhost:3001/persons");

    // when the promise resolved than we trigger this callback which update the state of the App
    promise.then((response) => {
      setPersons(response.data);
    });
  };

  useEffect(hook, []);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();

    const exists = persons.some(
      (person) => person.name.toLowerCase() === newName.toLowerCase(),
    );

    if (exists) {
      window.alert(`${newName} is already added to phonebook`);
      return;
    }

    const newPerson = {
      name: newName,
      number: newNumber,
    };

    setPersons(persons.concat(newPerson));

    setNewName("");
    setNewNumber("");
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchedName(event.target.value);
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(searchedName.toLowerCase()),
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        searchedName={searchedName}
        handleSearchChange={handleSearchChange}
      />
      <h2>add a new </h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons} />
    </div>
  );
};

export default App;
