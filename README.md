# 🚀 **[Todo Manager](https://Shri029.github.io/todo-manager)**

A Kanban-style Todo Manager built with **React**, **Redux**, and **TailwindCSS**.

---

## 📥 Installation & Setup

```
* git clone https://github.com/Shri029/todo-manager.git
* cd todo-manager  
* npm install  
* npm start  
---

## Application Structure
├── Head
└── Body
    └── MainContainer
        ├── Sidebar
        └── Main Container
            ├── Status Container ("Pending", "In Progress", "Completed")
            └── To-do Cards

---
```
### Styling
- Tailwind CSS

### State Management
- Redux

```
---
## Demo 
[Video](https://github.com/user-attachments/assets/56d28bae-e2c3-4bdc-9758-57dd799147e2)

[Todo Manager Application Link](https://Shri029.github.io/todo-manager)
---
```

#Approach taken
* Todo lists are being fetched and stotred in redux.
* Status - "Pending", "in-progress", "Complete" lists are being handeled on the basis of completed- true/false and dividing the list on the basis of length.
* Lists are being displayed on the basic of status and add, edit and delte operation are being managed throgh store.
* Head and sidebar component are completely static for now this can be taken in future enhancements.
* Limitation:- Task Title is not provided in the todo object.
* Future enhancement- The user the task is assigned can be shown. Time required for the task can be added to the card. 

