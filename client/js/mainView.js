import TaskGroup from './taskGroup'
class MainView {

    constructor() {
        console.log('MainView Loaded...');
        this.work = new TaskGroup(`work`, 'Praca', `Some quick example text to build on the card title and make up the bulk of the card's
        content.`, 'taskGroup', 'bg-primary');
        this.shop = new TaskGroup(`shop`, 'Lista zakupów', ``, 'taskGroup', 'bg-success');
        this.visit = new TaskGroup(`visits`, 'Do Odwiedzenia', ``, 'taskGroup', 'bg-secondary');
    }

    render() {
        document.getElementById('root').innerHTML = "";
        this.work.render();
        this.shop.render();
        this.visit.render();
        //To Do: kolejna/e karta z zadaniami wg schematu
        //Może by kiedyś dodać zawsze na ostatnim miejscu karte z plusikiem która pozwoli robić nowe grupy tasków (zobaczymy na co backend pozwoli)
    }

}

export default MainView;
