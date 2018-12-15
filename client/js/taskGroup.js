import TaskView from './taskView';

class taskGroup {

    constructor(taskGroupID, taskGroupName, taskGroupDes, taskGroupStyle, bgcolor) {
        console.log('taskGroup Loaded...');
        this.taskGroupID = taskGroupID;
        this.taskGroupName = taskGroupName;
        this.taskGroupDes = taskGroupDes; // zamiast tego jakiś obrazek moze iść
        this.taskGroupStyle = taskGroupStyle;// customowe style do napisana w SCSS tu tylko przekazać nazwe klasy, ewentualnie mozna to wywalić i ostylować ID
        this.bgcolor = bgcolor; //kolor tła z bootstrapa
        this.element = document.createElement("div");
        this.element.id = this.taskGroupID;
        this.element.className = `card text-white ${this.bgcolor} mb-3 ${this.taskGroupStyle}`
        this.element.onclick = this.click;
    }
    click = () => {
        const taskView = new TaskView(this.taskGroupName, this.bgcolor);
        taskView.render();
    }
    render() {
        // Oczywiscie caly ten HTML można zmienić ja to zakodowalem tylko by pokazać koncepcje

        this.element.innerHTML = `<div class="card-header">Karta zadań</div>
                                    <div class="card-body">
                                    <h5 class="card-title">${this.taskGroupName}</h5>
                                    <p class="card-text">${this.taskGroupDes}</p>`
        document.getElementById('root').appendChild(this.element);
    }

}



export default taskGroup;