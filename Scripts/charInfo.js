const Char_Name = String;
let Char_Race = String;
let Char_Class = String;
let CurrentHitPoints = Number;
const MaxHitPoints = Number;
let Armor_class = Number;
const Char_Info = [Char_Name, Char_Race, Char_Class, CurrentHitPoints, MaxHitPoints, Armor_class];
let Relentless_Endurance_Active = true


//Function to add or remove hitpoints to a character's total hp
function add_or_remove_HitPoints( Pos_or_Neg_HP_adjustment){
    // If Positive number, add to HP
    if( Pos_or_Neg_HP_adjustment > 0 ){
        Char_Info[3] += Pos_or_Neg_HP_adjustment
        return `${Char_Info[0]} has ${Char_Info[3]} hp.`
    }
    // If Negative number, remove from HP
    else if ( Char_Info[3] < 0 && Char_Info[3] > -Char_Info[4]){
        if ( Char_Info[1] === 'Half-Orc' && Relentless_Endurance_Active === True || Char_Info[1] === 'Orc' && Relentless_Endurance_Active === true ) {
            Relentless_Endurance_Active = false
            Char_Info[3]=1
            return `${Char_Info[0]} is at ${Char_Info[3]} hp. ${Char_Info[0]} has used Relentless_Endurance, you can't use this feature again until you finish a Long Rest.`
        }
        return `${Char_Info[0]} is unconcious, with a total hp of ${Char_Info[3]}.`
    }
}    

