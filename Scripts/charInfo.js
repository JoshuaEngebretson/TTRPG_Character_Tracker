let Wam_Info = {
    Name: 'Wam',
    Race: 'Half-Orc',
    Class: 'Fighter',
    CurrentHitPoints: 10,
    MaxHitPoints: 15,
    Armor_class: 15,
    Negative_MaxHitPoints: -15,
    Relentless_Endurance_Active: true,
    actionSurge: true
};

let Seahawk_Info = {
    Name: 'Seahawk',
    Race: 'Human',
    Class: 'Bard',
    CurrentHitPoints: 11,
    MaxHitPoints: 12,
    Armor_class: 14,
    Negative_MaxHitPoints: -12
};

let arrayOfCharactersInfo = [ Wam_Info, Seahawk_Info ];


console.log( Wam_Info );
console.log( Seahawk_Info );
console.log( arrayOfCharactersInfo );



//Function to add or remove hitpoints to a character's total hp
function add_or_remove_HitPoints( Pos_or_Neg_HP_adjustment, Character ){
    console.log(`-----\nusing add_or_remove_HitPoints function to adjust hp for ${Character.Name}\n-----`);
    let MaxHitPoints = Character.MaxHitPoints;
    let CurrentHitPoints = Character.CurrentHitPoints;
    let Negative_MaxHitPoints = (MaxHitPoints * -1);
    if (Character.CurrentHitPoints === 'dead') {
        return `${Character.Name} is dead and needs to be resurrected before they can be healed.`
    }
    CurrentHitPoints += Pos_or_Neg_HP_adjustment;
    // If Positive number, add to HP
    if( Pos_or_Neg_HP_adjustment > 0 ){
        // Check if at or below MaxHitPoints
        if ( CurrentHitPoints >= MaxHitPoints ) {
            console.log(`Test 1 (Healed, now at max)`);
            CurrentHitPoints = MaxHitPoints
            Character.CurrentHitPoints = CurrentHitPoints
            return `${Character.Name} has healed ${Pos_or_Neg_HP_adjustment} hitpoints to a current hp total of ${CurrentHitPoints} with a max ${MaxHitPoints} hp.`
        }
        console.log(`Test 2 (Healed, not at Max)`);
        Character.CurrentHitPoints = CurrentHitPoints;
        return `${Character.Name} has healed ${Pos_or_Neg_HP_adjustment} and is currently at ${CurrentHitPoints} hp.`
    }
    // If Negative number, remove from HP
    else if ( Pos_or_Neg_HP_adjustment < 0 ){
        if ( CurrentHitPoints <= 0 && CurrentHitPoints > Negative_MaxHitPoints ){
            if ( Character.Race === 'Half-Orc' && Character.Relentless_Endurance_Active === true || Character.Race === 'Orc' && Character.Relentless_Endurance_Active === true ) {
                console.log(`Test 3 (reduced to or below 0 but Relentless_Endurance is active)`);
                Character.Relentless_Endurance_Active = false
                CurrentHitPoints = 1
                Character.CurrentHitPoints = CurrentHitPoints
                return `${Character.Name} is at ${CurrentHitPoints} hp. ${Character.Name} has used Relentless Endurance and can't use this feature again until they finish a Long Rest.`
            }
            else {
                console.log(`Test 4 (reduced to or below 0, but not beyond NegativeMax)`);
                Character.CurrentHitPoints = 0
                return `${Character.Name} is unconcious. ${Character.Name} has ${CurrentHitPoints} hp.`
            }
        }
        else if ( CurrentHitPoints <= Negative_MaxHitPoints ) {
            console.log(`Test 5 (reduced below NegativeMax, is now dead)`);
            Character.CurrentHitPoints = 'dead'
            return `${Character.Name} has died.`
        }
        else {
            console.log(`Test 6 (HP reduced, but not below 0)`);
            Character.CurrentHitPoints = CurrentHitPoints
            return `${Character.Name} has taken ${-(Pos_or_Neg_HP_adjustment)} point(s) of damage and is now at ${Character.CurrentHitPoints}`
        }
    }
};


//Testing function
console.log( `add_or_remove_HitPoints - Should state 9 as we are subtracting 1 from 10 ---> ${add_or_remove_HitPoints(-1, Wam_Info)}`);

console.log( `add_or_remove_HitPoints - Should state 1 as we are subtracting 9 from 9 which would, but Relentless Endurance sets us to 1hp if active ---> ${add_or_remove_HitPoints( -9, Wam_Info )}`);

console.log( `add_or_remove_HitPoints - Should state 15 as we are adding 16 to 1 with a max hp of 15 ---> ${add_or_remove_HitPoints( 16, Wam_Info )}` );

console.log( `add_or_remove_HitPoints - Should state ${Wam_Info.Name} is unconcious ---> ${add_or_remove_HitPoints( -29, Wam_Info )}` );

console.log( `add_or_remove_HitPoints - Should state 7 ---> ${add_or_remove_HitPoints( 7, Wam_Info )}` );

console.log( `add_or_remove_HitPoints - Should state ${Wam_Info.Name} has died. ---> ${add_or_remove_HitPoints( -22, Wam_Info )}` );

console.log( `Checking Relentless_Endurance_Active for Wam, should state false ---> ${Wam_Info.Relentless_Endurance_Active}` );



// console.log( `Wam's current character info ---> ${listCharacterInfo(Wam_Info)}` );
console.log( `Below is Wam's current Info` );
console.log( Wam_Info );

function longRest( Character ) {
    console.log(`-----\nusing longRest function to Reset ${Character.Name}'s per long rest traits\n-----`);
    if ( Character.CurrentHitPoints === 'dead' ) {
        return `${Character.Name} is dead and unable to gain the benefits of a long rest`
    }
    Character.Relentless_Endurance_Active = true
    Character.actionSurge = true
    if ( Character.CurrentHitPoints > 0 ){
        Character.CurrentHitPoints = Character.MaxHitPoints
    }
    return `${Character.Name} has taken a longRest`
}

console.log( longRest(Wam_Info) );
console.log( `Checking Relentless_Endurance_Active for Wam, should state false ---> ${Wam_Info.Relentless_Endurance_Active}` );
console.log( Wam_Info );



function resurrection( Character ) {
    console.log(`-----\nUsing resurrection on ${Character.Name}\n-----`);
    if ( Character.CurrentHitPoints === 'dead' ) {
        Character.CurrentHitPoints = 1
        return `${Character.Name} has been resurrected. ${Character.Name} is now at ${Character.CurrentHitPoints} hitpoint.`
    }
}

console.log( resurrection(Wam_Info) );
console.log( longRest(Wam_Info) );
console.log( `Checking Relentless_Endurance_Active for Wam, should state true ---> ${Wam_Info.Relentless_Endurance_Active}` );