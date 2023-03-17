let Char_Name = String;
let Char_Race = String;
let Char_Class = String;
let CurrentHitPoints = Number;
let MaxHitPoints = Number;
let Armor_class = Number;

Char_Name = 'Wambamnec';
Char_Race = 'Half-Orc';
Char_Class = 'Fighter';
CurrentHitPoints = 10;
MaxHitPoints = 15;
Armor_class = 15;


let Char_Info = ['Character Name = '+Char_Name, 'Character Race = '+Char_Race, 'Class = '+Char_Class, 'Current Hit Points:', CurrentHitPoints, 'Max Hit Points:', MaxHitPoints, 'Armor Class:', Armor_class];
let Relentless_Endurance_Active = true

console.log(Char_Info);


//Function to add or remove hitpoints to a character's total hp
function add_or_remove_HitPoints( Pos_or_Neg_HP_adjustment){
    Char_Info[4] += Pos_or_Neg_HP_adjustment
    // If Positive number, add to HP
    if( Pos_or_Neg_HP_adjustment > 0 ){
        // Check if at or below MaxHitPoints
        if (Char_Info[4] >= Char_Info[6]) {
            Char_Info[4] = Char_Info[6]
            return `${Char_Info[0]} has healed ${Pos_or_Neg_HP_adjustment} to a max of ${Char_Info[4]} hp.`
        }
        return `${Char_Info[0]} has healed ${Pos_or_Neg_HP_adjustment} and is currently at ${Char_Info[4]} hp.`
    }
    // If Negative number, remove from HP
    else if ( Pos_or_Neg_HP_adjustment < 0 ){
        if ( Char_Info[4] <= 0 && Char_Info[4] > -Char_Info[6]){
            if ( Char_Info[1] === 'Half-Orc' && Relentless_Endurance_Active === True || Char_Info[1] === 'Orc' && Relentless_Endurance_Active === true ) {
                Relentless_Endurance_Active = false
                Char_Info[4] = 1
                return `${Char_Info[0]} is at ${Char_Info[4]} hp. ${Char_Info[0]} has used Relentless_Endurance, you can't use this feature again until you finish a Long Rest.`
            }
            if ( Char_Info[4] < 0 && Char_Info[4] <= -Char_Info[6]) {
                return `${Char_Info[0]} has died.`
            }
            return `${Char_Info[0]} is unconcious, with a total hp of ${Char_Info[4]}.`
        }
    }
    return `${Char_Info[0]} has ${Char_Info[4]} hp.`
}    

//Testing function
console.log('add_or_remove_HitPoints - Should state 9:', add_or_remove_HitPoints(-1));
console.log(Char_Info);

console.log('add_or_remove_HitPoints - Should state 0:', add_or_remove_HitPoints(-9));
console.log(Char_Info);

console.log('add_or_remove_HitPoints - Should state 15:', add_or_remove_HitPoints(16));
console.log(Char_Info);

console.log('add_or_remove_HitPoints - Should state -14:', add_or_remove_HitPoints(-29));
console.log(Char_Info);

console.log('add_or_remove_HitPoints - Should state "... has died.":', add_or_remove_HitPoints(-29));
console.log(Char_Info);