let Wam_Info = {
    Name: 'Wam',
    Race: 'Half-Orc',
    Class: 'Fighter', // Adjust to be an object with class + level as properties. This can allow for multi-classing
    CurrentHitPoints: 10,
    MaxHitPoints: 15,
    Armor_class: 15, // Could more to Additional Info
    Negative_MaxHitPoints: -15, // does this need to be set here? Could just be set in adjustHP function
    Relentless_Endurance_Active: true, // Could move to sub property of Race - 'Half-Orc' || 'Orc'
    actionSurge: true, // Could move to sub property of class - 'Fighter'
    ProficiencyBonus: 5,
    AbilityScores: [ // Modifier set via function that takes (AbilityScore(rounded down to even number) - 10) / 2 
        {Ability: 'Strength', AbilityScore: 20},
        {Ability: 'Dexterity', AbilityScore: 18},
        {Ability: 'Constitution', AbilityScore: 21},
        {Ability: 'Intelligence', AbilityScore: 17},
        {Ability: 'Wisdom', AbilityScore: 10},
        {Ability: 'Charisma', AbilityScore: 10}
    ],
    SavingThrows: [ // SavingThrows Bonus needs to be set via function that tests AbilityScores.Modifier + if(Proficient === true){proficiencyBonus} + MiscBonus
        {Ability: 'Strength', Proficient: true},
        {Ability: 'Dexterity', Proficient: false},
        {Ability: 'Constitution', Proficient: true},
        {Ability: 'Intelligence', Proficient: false},
        {Ability: 'Wisdom', Proficient: false},
        {Ability: 'Charisma', Proficient: false}
    ],
    Skills: [ // SkillBonus needs to be set via function that tests AbilityScores.Modifier + if(Proficient === true){proficiencyBonus} + MiscBonus
        {SkillName: 'Acrobatics', Ability: '(Dex)', Proficient: false},
        {SkillName: 'Animal Handline', Ability: '(Wis)', Proficient: false},
        {SkillName: 'Arcana', Ability: '(Int)', Proficient: false},
        {SkillName: 'Athletics', Ability: '(Str)', Proficient: true},
        {SkillName: 'Deception', Ability: '(Cha)', Proficient: false},
        {SkillName: 'History', Ability: '(Int)', Proficient: false},
        {SkillName: 'Insight', Ability: '(Wis)', Proficient: false},
        {SkillName: 'Intimidation', Ability: '(Cha)', Proficient: true},
        {SkillName: 'Investigation', Ability: '(Int)', Proficient: false},
        {SkillName: 'Medicine', Ability: '(Wis)', Proficient: false},
        {SkillName: 'Nature', Ability: '(Int)', Proficient: false},
        {SkillName: 'Perception', Ability: '(Wis)', Proficient: true},
        {SkillName: 'Performance', Ability: '(Cha)', Proficient: false},
        {SkillName: 'Persuasion', Ability: '(Cha)', Proficient: false},
        {SkillName: 'Religion', Ability: '(Int)', Proficient: false},
        {SkillName: 'Sleight of Hand', Ability: '(Dex)', Proficient: false},
        {SkillName: 'Stealth', Ability: '(Dex)', Proficient: false},
        {SkillName: 'Survival', Ability: '(Wis)', Proficient: false},
    ]
};
// let Wam_AdditionalInfo = {
//     abilityModifierCalc(Wam_Info);
// };

let Seahawk_Info = {
    Name: 'Seahawk',
    Race: 'Human',
    Class: 'Bard',
    CurrentHitPoints: 11,
    MaxHitPoints: 12,
    Armor_class: 14,
    Negative_MaxHitPoints: -12,
    ProficiencyBonus: 2,
    AbilityScores: [ // Modifier set via function that takes (AbilityScore(rounded down to even number) - 10) / 2 
        {Ability: 'Strength', AbilityScore: 15},
        {Ability: 'Dexterity', AbilityScore: 13},
        {Ability: 'Constitution', AbilityScore: 14},
        {Ability: 'Intelligence', AbilityScore: 11},
        {Ability: 'Wisdom', AbilityScore: 9},
        {Ability: 'Charisma', AbilityScore: 16}
    ],
    SavingThrows: [ // SavingThrows Bonus needs to be set via function that tests AbilityScores.Modifier + if(Proficient === true){proficiencyBonus} + MiscBonus
        {Ability: 'Strength', Proficient: false},
        {Ability: 'Dexterity', Proficient: true},
        {Ability: 'Constitution', Proficient: false},
        {Ability: 'Intelligence', Proficient: false},
        {Ability: 'Wisdom', Proficient: false},
        {Ability: 'Charisma', Proficient: true}
    ],
    Skills: [  // SkillBonus needs to be set via function that tests AbilityScores.Modifier + if(Proficient === true){proficiencyBonus} + MiscBonus
        {SkillName: 'Acrobatics', Ability: '(Dex)', Proficient: false},
        {SkillName: 'Animal Handline', Ability: '(Wis)', Proficient: true},
        {SkillName: 'Arcana', Ability: '(Int)', Proficient: false},
        {SkillName: 'Athletics', Ability: '(Str)', Proficient: true},
        {SkillName: 'Deception', Ability: '(Cha)', Proficient: true},
        {SkillName: 'History', Ability: '(Int)', Proficient: false},
        {SkillName: 'Insight', Ability: '(Wis)', Proficient: false},
        {SkillName: 'Intimidation', Ability: '(Cha)', Proficient: false},
        {SkillName: 'Investigation', Ability: '(Int)', Proficient: false},
        {SkillName: 'Medicine', Ability: '(Wis)', Proficient: false},
        {SkillName: 'Nature', Ability: '(Int)', Proficient: false},
        {SkillName: 'Perception', Ability: '(Wis)', Proficient: true},
        {SkillName: 'Performance', Ability: '(Cha)', Proficient: false},
        {SkillName: 'Persuasion', Ability: '(Cha)', Proficient: true},
        {SkillName: 'Religion', Ability: '(Int)', Proficient: false},
        {SkillName: 'Sleight of Hand', Ability: '(Dex)', Proficient: false},
        {SkillName: 'Stealth', Ability: '(Dex)', Proficient: false},
        {SkillName: 'Survival', Ability: '(Wis)', Proficient: false},
    ]
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
}; // end Add_RemoveHitPoints


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
        if ( Character.ResurrectionSickness >= -1 ) { // if RessurrectionSickness is greater than or equal to 0
            delete Character.ResurrectionSickness // removes property of ResurrectionSickness
            console.log(`${Character.Name} is no longer suffering from Resurrection Sickness`);
        }
        else { // ELSE (assumes RessurrectionSickness is less than 0)
            Character.ResurrectionSickness += 1 // reduce negative of ResurrectionSickness
            console.log(`${Character.Name} needs ${-Character.ResurrectionSickness} more long rests until Resurrection Sickness wears off.`);
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
    console.log( '👆1st long rest since death, expect 3 more rests needed👆' );
    console.log( `Checking Relentless_Endurance_Active for Wam, Expected true ---> ${Wam_Info.Relentless_Endurance_Active}` );
    console.log( longRest(Wam_Info) );
    console.log( '👆2nd long rest since death, expect 2 more rests needed👆' );
    console.log( longRest(Wam_Info) );
    console.log( '👆3rd long rest since death, expect 1 more rests needed👆' );
    console.log( longRest(Wam_Info) );
    console.log( '👆4th long rest since death, expect 0 more rests needed👆' );
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


function abilityModifierCalc (Character_Info) { // Calculates ability score modifier
    console.log(Character_Info.AbilityScores);
    for (let i=0; i<Character_Info.AbilityScores.length; i++) {
        if (Character_Info.AbilityScores[i].AbilityScore%2 === 0) {
            Character_Info.AbilityScores[i].Modifier = ((Character_Info.AbilityScores[i].AbilityScore-10)/2)
        }
        else {
            let ModRound = Character_Info.AbilityScores[i].AbilityScore -1
            Character_Info.AbilityScores[i].Modifier = ((ModRound-10)/2)
        }
    };
} // End abilityModifierCalc
