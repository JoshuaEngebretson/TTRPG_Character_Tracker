let Char_Name = String;
let Char_Race = String;
let Char_Class = String;
let CurrentHitPoints = Number;
let MaxHitPoints = Number;
let Armor_class = Number;


Char_Name = 'Wam';
Char_Race = 'Half-Orc';
Char_Class = 'Fighter';
CurrentHitPoints = 10;
MaxHitPoints = 15;
Armor_class = 15;

let Negative_MaxHitPoints = (MaxHitPoints* -1)
let Char_Info = ['Character Name:', Char_Name, 'Character Race:', Char_Race, 'Class = '+Char_Class, 'Current Hit Points:', CurrentHitPoints, 'Max Hit Points:', MaxHitPoints, 'Armor Class:', Armor_class];
let Relentless_Endurance_Active = true

let abbriged_Char_Info = [Char_Info[1], Char_Info[5], Char_Info[6], Char_Info[7], Char_Info[8]]

console.log('Char_Info =', Char_Info);
console.log('abbriged_Char_Info =', abbriged_Char_Info);
console.log('Negative_MaxHitPoits =', Negative_MaxHitPoints);


//Function to add or remove hitpoints to a character's total hp
function add_or_remove_HitPoints( Pos_or_Neg_HP_adjustment){
    Char_Info[6] += Pos_or_Neg_HP_adjustment
    abbriged_Char_Info[2] += Pos_or_Neg_HP_adjustment
    // If Positive number, add to HP
    if( Pos_or_Neg_HP_adjustment > 0 ){
        // Check if at or below MaxHitPoints
        if (Char_Info[6] >= Char_Info[8]) {
            Char_Info[6] = Char_Info[8]
            abbriged_Char_Info[2] = abbriged_Char_Info[4]
            return `${Char_Info[1]} has healed ${Pos_or_Neg_HP_adjustment} to  a current hp total of ${Char_Info[6]} of a max ${Char_Info[8]} hp.`
        }
        return `${Char_Info[1]} has healed ${Pos_or_Neg_HP_adjustment} and is currently at ${Char_Info[6]} hp.`
    }
    // If Negative number, remove from HP
    else if ( Pos_or_Neg_HP_adjustment < 0 ){
        if ( Char_Info[6] <= 0 && Char_Info[6] > Negative_MaxHitPoints){
            if ( Char_Info[3] === 'Half-Orc' && Relentless_Endurance_Active === true || Char_Info[3] === 'Orc' && Relentless_Endurance_Active === true ) {
                Relentless_Endurance_Active = false
                Char_Info[6] = 1
                abbriged_Char_Info[2] = 1
                return `${Char_Info[1]} is at ${Char_Info[6]} hp. ${Char_Info[1]} has used Relentless Endurance and can't use this feature again until they finish a Long Rest.`
            }
            else if ( Char_Info[6] <= Negative_MaxHitPoints) {
                Char_Info[6] = 'dead'
                abbriged_Char_Info[2] = 'dead'
                return `${Char_Info[1]} has died.`
            }
            else {
            Char_Info[6] = 0
            abbriged_Char_Info[2] = 0
            return `${Char_Info[1]} is unconcious. ${Char_Info[1]} has ${Char_Info[6]} hp.`
            }
        }
    }
}    

//Testing function
console.log('add_or_remove_HitPoints - Should state 9 as we are subtracting 1 from 10:', add_or_remove_HitPoints(-1));
console.log(abbriged_Char_Info);

console.log('add_or_remove_HitPoints - Should state 1 as we are subtracting 9 from 9 which would, but Relentless Endurance sets us to 1hp if active:', add_or_remove_HitPoints(-9));
console.log(abbriged_Char_Info);

console.log('add_or_remove_HitPoints - Should state 15 as we are adding 16 to 1 with a max hp of 15:', add_or_remove_HitPoints(16));
console.log(abbriged_Char_Info);

console.log('add_or_remove_HitPoints - Should state "'+Char_Info[1],' is unconcious":', add_or_remove_HitPoints(-29));
console.log(abbriged_Char_Info);

console.log('add_or_remove_HitPoints - Should state 7:', add_or_remove_HitPoints(7));
console.log(abbriged_Char_Info);

console.log('add_or_remove_HitPoints - Should state "'+Char_Info[1], 'has died.":', add_or_remove_HitPoints(-22));
console.log(abbriged_Char_Info);

console.log('Checking Relentless_Endurance_Active, should state false:', Relentless_Endurance_Active);

console.log('Char_Info =', Char_Info);
console.log('abbriged_Char_Info =', abbriged_Char_Info);

