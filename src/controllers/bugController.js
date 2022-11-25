import bugModel from '../models/bugModel';

export function retrieveBugs(){
    let data = [];
    data.push(new bugModel({
        _id:23485469464,
        name:"Crash and Load",
        detail:"Crashes after 3 seconds",
        steps:"Open application and it will crash",
        version:"V2.0",
        assigned:"Mauricio Bo",
        creator:"Juan Wirdo",
        priority:1,
        time:"22:30",
    }))
    data.push(new bugModel({
        _id:23485469465,
        name:"Wont Load",
        detail:"Crashes after 3 seconds",
        steps:"Open application and it will crash",
        version:"V2.0",
        assigned:"Mauricio Bo",
        creator:"Juan Wirdo",
        priority:3,
        time:"22:30",
    }))

    let sorted = data.sort((a,b) => {return a.priority- b.priority});

    return sorted;
}