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
function Add_RemoveHitPoints( Pos_or_Neg_HP_adjustment, Character ){
    console.log(`\nUsing add_or_remove_HitPoints function to adjust hp for ${Character.Name}\n\n`);
    let MaxHitPoints = Character.MaxHitPoints;
    let CurrentHitPoints = Character.CurrentHitPoints;
    let Negative_MaxHitPoints = (MaxHitPoints * -1);
    if (Character.CurrentHitPoints === 'dead') {
        console.log(`Test DEAD, can't heal`);
        return `🚫${Character.Name} is dead and needs to be resurrected before they can be healed.🚫`
    }
    CurrentHitPoints += Pos_or_Neg_HP_adjustment;
    // If Positive number, add to HP
    if( Pos_or_Neg_HP_adjustment > 0 ){
        // Check if at or below MaxHitPoints
        if ( CurrentHitPoints >= MaxHitPoints ) {
            console.log(`💚💚Heal💚💚 Test 1 (Healed, now at max)`);
            CurrentHitPoints = MaxHitPoints
            Character.CurrentHitPoints = CurrentHitPoints
            return `💚${Character.Name} has healed ${Pos_or_Neg_HP_adjustment} hitpoints to a current hp total of ${CurrentHitPoints} with a max ${MaxHitPoints} hp.💚`
        }
        console.log(`💚💚Heal💚💚 Test 2 (Healed, not at Max)`);
        Character.CurrentHitPoints = CurrentHitPoints;
        return `💚${Character.Name} has healed ${Pos_or_Neg_HP_adjustment} and is currently at ${CurrentHitPoints} hp.💚`
    }
    // If Negative number, remove from HP
    else if ( Pos_or_Neg_HP_adjustment < 0 ){
        if ( CurrentHitPoints <= 0 && CurrentHitPoints > Negative_MaxHitPoints ){
            if ( Character.Race === 'Half-Orc' && Character.Relentless_Endurance_Active === true || Character.Race === 'Orc' && Character.Relentless_Endurance_Active === true ) {
                console.log(`💔Damage💔 Test 1 (reduced to or below 0 but Relentless_Endurance is active)`);
                Character.Relentless_Endurance_Active = false
                CurrentHitPoints = 1
                Character.CurrentHitPoints = CurrentHitPoints
                return `💔${Character.Name} is at ${CurrentHitPoints} hp. ${Character.Name} has used Relentless Endurance and can't use this feature again until they finish a Long Rest.💔`
            }
            else {
                console.log(`💔Damage💔 Test 2 (reduced to or below 0, but not beyond NegativeMax)`);
                CurrentHitPoints = 0
                Character.CurrentHitPoints = CurrentHitPoints
                return `💔${Character.Name} is unconcious. ${Character.Name} has ${CurrentHitPoints} hp.💔`
            }
        }
        else if ( CurrentHitPoints <= Negative_MaxHitPoints ) {
            console.log(`💔Damage💔 Test 3 (reduced below NegativeMax, is now dead 😵)`);
            Character.CurrentHitPoints = 'dead'
            return `💔😵${Character.Name} has died.😵💔`
        }
        else {
            console.log(`💔Damage💔 Test 4 (HP reduced, but not below 0)`);
            Character.CurrentHitPoints = CurrentHitPoints
            return `💔${Character.Name} has taken ${-(Pos_or_Neg_HP_adjustment)} point(s) of damage and is now at ${Character.CurrentHitPoints}💔`
        }
    }
}; // end add_or_remove_HitPoints


function longRest( Character ) {
    console.log(`-----\nusing longRest function to Reset ${Character.Name}'s per long rest traits\n-----`);
    console.log('Current hitpoints before long rest ---> ' + Character.CurrentHitPoints);
    if ( Character.CurrentHitPoints === 'dead' ) { // if dead unable to take longRest
        return `${Character.Name} is dead and unable to gain the benefits of a long rest.`
    } // End if dead
    if ( Character.CurrentHitPoints != undefined ) { // Block test what to do with CurrentHitPoints, may want to break into own function later.
        if ( Character.CurrentHitPoints >= 0 || Character.CurrentHitPoints < 0 ){ 
            if ( Character.CurrentHitPoints > 0 ) { // Reset HP to Max if above 0
                Character.CurrentHitPoints = Character.MaxHitPoints
            } // End Reset HP
            else if ( Character.CurrentHitPoints === 0 ) { // if CurrentHitPoints at 0 (can never end a turn below 0 except if dead, then CurrentHitPoints equals 'dead')
                return `🚫 ${Character.Name} is unconcious and unable to gain the benefits of a long rest until healed. 🚫`
            }
            else { // if CurrentHitPoint is less than 0 points back to function where this issue likely took place.
                console.log( '🚫🚫🚫\n||ERROR||\n Check in Add_RemoveHitPoints to see if giving a value less than 0 that is not being corrected to 0' );
            }
        }
        else { // Error message if Character.CurrentHitPoints is NaN 
            console.log( '🚫🚫🚫\n||ERROR||\n'+ Character.Name + "'s .CurrentHitPoints is NaN\nValue of .CurrentHitPoints = " + Character.CurrentHitPoints + '\n|END ERROR|\n-----' );
        }
    } // End what to do with CurrentHitPoints
    if ( Character.Race === 'Half-Orc' || Character.Race === 'Orc' ) { // LongRest functionality if .Race equals Half-Orc or Orc
        Character.Relentless_Endurance_Active = true
    } // End if Half-Orc or Orc
    if ( Character.Class != undefined ) { // LongRest differences based on .Class
        if( Character.Class === 'Fighter' ){ // LongRest functionality if .Class equals Fighter
            Character.actionSurge = true
        } // End if Fighter
        /*
        Add other classes with longRest specific functionality.
        */
    } // End test based on .Class
    if( Character.ResurrectionSickness ){ // if ResurrectionSickness
        if ( Character.ResurrectionSickness >= 0 ) { // if RessurrectionSickness is greater than or equal to 0
            delete Character.ResurrectionSickness // removes property of ResurrectionSickness
        }
        else { // ELSE (assumes RessurrectionSickness is less than 0)
            Character.ResurrectionSickness += 1 // reduce negative of ResurrectionSickness
        }
    } // End if ResurrectionSickness
    return `${Character.Name} has taken a longRest and is now at max hitpoints - ${Character.CurrentHitPoints} 💚`
} // end longRest


function resurrection( Character ) {
    console.log(`-----\nUsing resurrection on ${Character.Name}\n-----`);
    if ( Character.CurrentHitPoints === 'dead' ) {
        Character.CurrentHitPoints = Character.MaxHitPoints
        // the target takes a -4 penalty to all Attack rolls, Saving Throws, and Ability Checks
            // Everytime the target finishes a longRest, the penalty is reduced by 1 until it disappears
        Character.ResurrectionSickness = -4 
        return `💚💚 ${Character.Name} has been resurrected. ${Character.Name} is now at ${Character.CurrentHitPoints} hitpoints.💚💚`
    }
} // end resurrection

//Testing function
function WamTest() { // Console Logs of Wam Tests
    console.log(`########################################\nInside WamTest`);
    console.log( `👇 👇 Wam's current info BEFORE Tests 👇 👇` );
    console.log( Wam_Info );
    console.log( `Add_RemoveHitPoints - Expected 9 as we are subtracting 1 from 10 ---> ${Add_RemoveHitPoints(-1, Wam_Info)}`);
    console.log( `Add_RemoveHitPoints - Expected 1 as we are subtracting 9 from 9 which would, but Relentless Endurance sets us to 1hp if active ---> ${Add_RemoveHitPoints( -9, Wam_Info )}`);
    console.log( `Add_RemoveHitPoints - Expected 15 as we are adding 16 to 1 with a max hp of 15 ---> ${Add_RemoveHitPoints( 16, Wam_Info )}` );
    console.log( `Add_RemoveHitPoints - Expected ${Wam_Info.Name} is unconcious ---> ${Add_RemoveHitPoints( -29, Wam_Info )}` );
    console.log( `Add_RemoveHitPoints - Expected 7 ---> ${Add_RemoveHitPoints( 7, Wam_Info )}` );
    console.log( `Add_RemoveHitPoints - Expected ${Wam_Info.Name} has died. ---> ${Add_RemoveHitPoints( -22, Wam_Info )}` );
    console.log( `Add_RemoveHitPoints - Expected ${Wam_Info.Name} can't heal. ---> ${Add_RemoveHitPoints( 3, Wam_Info )}` );
    console.log( `Checking Relentless_Endurance_Active for Wam, Expected false ---> ${Wam_Info.Relentless_Endurance_Active}` );
    console.log( `👇 👇 Wam's current info MIDDLE Tests 👇 👇` );
    console.log( Wam_Info );
    console.log( longRest(Wam_Info) );
    console.log( `Checking Relentless_Endurance_Active for Wam, Expected false ---> ${Wam_Info.Relentless_Endurance_Active}` );
    console.log( resurrection(Wam_Info) );
    console.log( longRest(Wam_Info) );
    console.log( `Checking Relentless_Endurance_Active for Wam, Expected true ---> ${Wam_Info.Relentless_Endurance_Active}` );
    console.log( `👇 👇 Wam's current info AFTER Tests 👇 👇` );
    console.log( Wam_Info );
    console.log(`Finished WamTest\n########################################`);
} // End Wam Tests
WamTest()


function SeahawkTest() { // Console Logs of Seahawk Tests
    console.log(`########################################\nInside SeahawkTest`);
    console.log( `👇 👇 Seahawk's current info BEFORE Tests 👇 👇` );
    console.log( Seahawk_Info );
    console.log( `Add_RemoveHitPoints - Expected 10 as we are subtracting 1 from 11 ---> ${Add_RemoveHitPoints(-1, Seahawk_Info)}`);
    console.log( `Add_RemoveHitPoints - Expected 0 as we are subtracting 10 from 10 ---> ${Add_RemoveHitPoints( -10, Seahawk_Info )}`);
    console.log( `Add_RemoveHitPoints - Expected 12 as we are adding 16 to 0 with a max hp of 12 ---> ${Add_RemoveHitPoints( 16, Seahawk_Info )}` );
    console.log( `Add_RemoveHitPoints - Expected ${Seahawk_Info.Name} is unconcious ---> ${Add_RemoveHitPoints( -23, Seahawk_Info )}` );
    console.log( `longRest - Expected unconcious unable to long rest ---> ${longRest(Seahawk_Info)}` );
    console.log( `Add_RemoveHitPoints - Expected 7 ---> ${Add_RemoveHitPoints( 7, Seahawk_Info )}` );
    console.log( `Add_RemoveHitPoints - Expected ${Seahawk_Info.Name} has died. ---> ${Add_RemoveHitPoints( -22, Seahawk_Info )}` );
    console.log( `longRest - Expected dead unable to long rest ---> ${longRest(Seahawk_Info)}` );
    console.log( `Add_RemoveHitPoints - Expected ${Seahawk_Info.Name} can't heal. ---> ${Add_RemoveHitPoints( 3, Seahawk_Info )}` );
    console.log( `Checking Relentless_Endurance_Active for Seahawk, Expected undefined ---> ${Seahawk_Info.Relentless_Endurance_Active}` );
    console.log( `👇 👇 Seahawk's current info MIDDLE Tests 👇 👇` );
    console.log( Seahawk_Info );
    console.log( longRest(Seahawk_Info) );
    console.log( `Checking Relentless_Endurance_Active for Seahawk, Expected undefined ---> ${Seahawk_Info.Relentless_Endurance_Active}` );
    console.log( resurrection(Seahawk_Info) );
    console.log( longRest(Seahawk_Info) );
    console.log( `Checking Relentless_Endurance_Active for Seahawk, Expected undefined ---> ${Seahawk_Info.Relentless_Endurance_Active}` );
    console.log( `👇 👇 Seahawk's current info AFTER Tests 👇 👇` );
    console.log( Seahawk_Info );
    console.log(`Finished SeahawkTest\n########################################`);
} // End Seahawk Tests
SeahawkTest()
