class Building {
    windows:string='wind1';
    esclators(){        
        console.log('the escaltors is moving');
    }
    
}


class Building2 extends Building{
    esclators(){        
        console.log('the escaltors is moving from building 2', this.windows);
    }
}
const building2 =new Building2;
building2.esclators();


// const building = new Building;
// building.esclators();