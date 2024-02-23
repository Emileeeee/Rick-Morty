export default function openModalBlockPerson(person) {
    const ModalWindow = document.createElement("div");
    ModalWindow.className = "ModalWindow";
  
    const backbtn = document.createElement("div");
    backbtn.className = "backbtn";
    backbtn.textContent = "Back";
  
    const Modalcontent = document.createElement("div");
    Modalcontent.className = "Modalcontent";
    const ModalTextContent = document.createElement("div");
    ModalTextContent.className = "ModalTextContent";
  
    const IdPerson = document.createElement("div");
    IdPerson.textContent = "№" + person.id;
    IdPerson.className = "ModalText";
  
    const NamePerson = document.createElement("div");
    NamePerson.textContent = "name: " + person.name;
    NamePerson.className = "ModalText";
  
    const ImagePerson = document.createElement("img");
    ImagePerson.src = person.image;
    ImagePerson.className = "ImagePersonModal";
  
    const statusPerson = document.createElement("div");
    statusPerson.textContent = "status: " + person.status;
    statusPerson.className = "ModalText";
  
    const TypePerson = document.createElement("div");
    TypePerson.textContent = "type: " + person.type;
    TypePerson.className = "ModalText";
  
    const SpeciesPerson = document.createElement("div");
    SpeciesPerson.textContent = "species: " + person.species;
    SpeciesPerson.className = "ModalText";
  
    const GenderPerson = document.createElement("div");
    GenderPerson.textContent = "gender: " + person.gender;
    GenderPerson.className = "ModalText";
  
    const OriginPerson = document.createElement("div");
    OriginPerson.textContent = "origin: " + person.origin.name;
    OriginPerson.className = "ModalText";
  
    const LocationPerson = document.createElement("div");
    LocationPerson.textContent = "location: " + person.location.name;
    LocationPerson.className = "ModalText";
  
    backbtn.addEventListener("click", e => {
      if (ModalWindow) {
        ModalWindow.remove();
      }
      
    });
    Modalcontent.appendChild(ImagePerson);
    Modalcontent.appendChild(ModalTextContent);
  
    ModalTextContent.appendChild(IdPerson);
    ModalTextContent.appendChild(NamePerson);
    ModalTextContent.appendChild(statusPerson);
    ModalTextContent.appendChild(TypePerson);
    ModalTextContent.appendChild(SpeciesPerson);
    ModalTextContent.appendChild(GenderPerson);
    ModalTextContent.appendChild(OriginPerson);
    ModalTextContent.appendChild(LocationPerson);
    ModalTextContent.appendChild(backbtn);
    ModalWindow.appendChild(Modalcontent);
    document.body.appendChild(ModalWindow);
  }
  