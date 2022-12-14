/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*  -INFORMATION-
	Subject:    3rd-party compendium
	Effect:     
	Content:	
	Code by:	Damien101482
	Date:		2020-04-27 (sheet v13)
*/

var iFileName = "OotDSpells_v13.js";

RequiredSheetVersion(13);

SourceList["OotD"] = {
	name : "Odyssey of the Dragonlords",
	abbreviation : "OotD",
	date : "2020/04/27",
	group : "Third Party Compendium",
	url : "https://www.kickstarter.com/projects/arcanumworlds/odyssey-of-the-dragonlords-5th-edition-adventure-b",
	defaultExcluded : true
};
//spells start
SpellsList["Animal Polymorph"] = {
    name : "Animal Polymorph",
    classes : ["Druid", "ranger"],
    source : ["OotD", 54],
    level : 3,
    school : "trans",
    time : "1 a",
    range : "60 Feet",
    components : "V,S",
    duration : "conc, 10 mins",
    save : "Wis",
    ritual: false,
    description : "1 creature save or transformed",
    descriptionFull : "This spell transforms a creature you can see within range into a new beast form. An unwilling creature must make a Wisdom saving throw to avoid the effect. A shapechanger automatically succeeds on this saving throw.  The transformation lasts for the duration, or until the target drops to 0 hit points or dies. The new form can be any beast of CR 1 or less that does not have a fly speed. While in this new form, the target is charmed by you and views you as a trusted ally. The target can understand simple commands such as “attack” or “stay.” The charm affects creatures that are immune to charm in their normal form. The charm ends immediately when the target reverts to its normal form.  The target’s game statistics, including mental ability scores, are replaced by the statistics of the chosen beast. It retains its alignment and personality. The creature is limited in the actions it can perform by the nature of its new form, and it can’t speak, cast spells, or take any other action that requires hands or speech. The creature's gear melds into its new form. The creature can’t activate, use, wield, or otherwise benefit from any of its equipment.  The target assumes the hit points of its new form. When it reverts to its normal form, the creature returns to the number of hit points it had before it transformed. If it reverts as a result of dropping to 0 hit points, any excess damage carries over to its normal form."
};
SpellsList["bond of the dragonlords"] = {
    name : "Bond of the Dragonlords",
    classes : ["Paladin"],
    source : ["OotD", 54],
    level : 2,
    school : "Ench",
    time : "1 min",
    range : "Touch",
    components : "V,M\u2020",
    compMaterial : "magical armor, shield, weapon, ring, rod, staff, or wand worth at least 5,000 gp; Unhatched Dragon Egg",
    duration : "Special",
    ritual: false,
    description : "You permanently bond with a newly-hatched metallic dragon.",
    descriptionFull : "You permanently bond with a newly-hatched metallic dragon. This requires you to locate an unhatched dragon egg and spend 1d4 days nurturing the egg so that it hatches. The hatchling may be any of the following types of dragon wyrmling: brass, bronze, copper, or silver.  You can confer the bond to another recipient who you are touching when you cast the spell. A dragon that has been bonded can never be bonded with another target. Likewise, this spell cannot be used to bond more than one dragon to any individual.  Wyrmlings cannot be used as mounts until they grow into young dragons. A dragon cannot use legendary actions while it is being used as a mount.  Controlling the Dragon. Your dragon moves and acts on your initiative. You can decide how the dragon moves and attacks. While your dragon is fighting alongside you, it loses its multiattack feature. If your dragon has a breath weapon, it can be used once, and it recharges after you and the dragon complete a long rest.  If your bonded dragon dies, you will also die within 24 hours unless the dragon is returned to life. You cannot be raised from the dead unless your bonded dragon is alive. The same is true for your dragon."
};
SpellsList["Dirge of the dragonlords"] = {
    name : "Dirge of the Dragonlords",
    classes : ["Bard", "Cleric", "Paladin"],
    source : ["OotD", 54],
    level : 3,
    school : "Necro",
    time : "1 hour",
    range : "Touch",
    components : "V,M\u2020",
    compMaterial : "an offering of gems and coins worth at least 1,000 gp, which the spell consumes",
    duration : "Instantaneous",
    ritual: false,
    description : "You return a dead dragon to life.",
    descriptionFull : "You return a dead dragon that has been bonded to a Dragonlord back to life. The dragon returns to life with 1 hit point. All of the dragon's mortal wounds are closed, and any missing body parts are restored.  This spell also neutralizes any poisons and cures nonmagical diseases that affected the dragon at the time it died. This spell doesn’t, however, remove magical diseases, curses, or similar effects; if these aren’t first removed prior to casting the spell, they take effect when the dragon returns to life."
};
SpellsList["Fatebinding"] = {
    name : "Fatebinding",
    classes : ["Bard", "Cleric", "Warlock", "Wizard"],
    source : ["OotD", 54],
    level : 3,
    school : "Necro",
    time : "1 a",
    range : "30 feet",
    components : "V",
    duration : "1 hour",
    ritual: false,
    description : "You bind two creatures together.",
    descriptionFull : "Choose two creatures that you can see. Both creatures must make Charisma saving throws, and they do so with advantage if they are hostile to you. If a creature is charmed by you, it has disadvantage on this saving throw. If both creatures fail their saving throws, then their fates are now bound together." + "\n   " + "•  Whenever one of the creatures takes damage, the other creature takes an identical amount of damage, unless both creatures took damage from the same single source, such as a fireball spell." + "\n   " + "•  Whenever one of the creatures regains hit points, the other creature regains an identical number of hit points, unless both creatures regained hit points from the same single source, such as mass cure wounds.  The two target creatures remain fate-bound for the duration of the spell, even if both targets are on different planes of existence."
};
SpellsList["Seeds of Death"] = {
    name : "Seed of Death",
    classes : ["Bard", "Cleric", "Paladin"],
    source : ["OotD", 55],
    level : 6,
    school : "Necro",
    time : "1 a",
    range : "30 feet",
    components : "V,S,M\u2020",
    compMaterial : "three or more minotaur teeth and alchemical fertilizer worth 100 gp",
    duration : "conc, 10 mins",
    ritual: false,
    description : "Raise Minataur skeletons.",
    descriptionFull : "You throw three minotaur teeth on to the ground in front of you. At the start of your next turn, three minotaur skeletons erupt from the ground, fully formed. You can use a bonus action to shout commands at the minotaur skeletons if they are within 100 ft. of you. Your commands must be general orders, such as 'attack that enemy' or 'guard this room.' Once given an order, the minotaur skeletons will continue to follow it until the task is complete or until you issue another command. If the minotaur skeletons are given no commands, they will attack the nearest creature. When the spell ends, the minotaur skeletons dissolve into bone dust." + AtHigherLevels + "When you cast this spell using a spell slot of 7th level or higher, you animate an extra minotaur skeleton for each slot level above 6th."
};
SpellsList["Sleeping Draught"] = {
    name : "Sleeping Draught",
    classes : ["Warlock", "Wizard", "Bard"],
    source : ["OotD", 55],
    level : 6,
    school : "Ench",
    time : "1 a",
    range : "20 feet",
    components : "V,S,M",
    compMaterial : "A draught of liquid",
    duration : "1 min",
    ritual: false,
    description : "Make people Drowsy; 9d8+3d8/sl",
    descriptionFull : "You open a draught and a purple mist flows from you to a target creature. Roll 9d8; if the target creature has fewer current hit points than the total, then it falls unconscious. The target remains unconscious until the spell ends, the sleeper takes damage, or someone uses an action to shake or slap the sleeper awake. If the target creature has more hit points than the rolled total, then it becomes drowsy and its speed is halved, it can’t take reactions, and it can’t make more than one melee or ranged attack during its turn. The target remains drowsy until it takes damage or until the spell ends." + "/n" + "Undead and creatures that are immune to being charmed aren’t affected by this spell." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, roll an additional 3d8 for each slot level above the 2nd."
};
SpellsList["Sword of Fate"] = {
    name : "Sword of Fate",
    classes : ["Cleric", "Warlock", "Bard"],
    source : ["OotD", 55],
    level : 5,
    school : "Illus",
    time : "1 a",
    range : "60 feet",
    components : "V",
    duration : "1 hour",
    ritual: false,
    description : "Create Damicles Sword; 10d8 slash dmg.",
    descriptionFull : "Choose a creature that you can see. You create an illusionary sword that hangs above that creature's head. Everyone with line of sight can see the sword except for the affected creature. When you cast the spell you must shout out one of the following conditions:" + "\n   " + "•  You cannot harm us. The target creature breaks this condition if they target the spell caster or a companion with an attack or a spell that causes damage."  + "\n   " + "•  You cannot use magic. The target creature breaks this condition if they cast a spell." + "\n   " + "•  You cannot leave this area. The target creature breaks this condition if it moves more than 30 feet from the spot it was standing when the spell was cast." + "\n   " + "If the target creature breaks the condition, it takes 10d8 slashing damage as the blade becomes real and slices downward. If the target is reduced to 0 hit points, then one of its heads is removed. If the creature has no remaining heads, then it is instantly killed.  The sword of fate can be dispelled. In addition, remove curse will end the spell on the target."
};
SpellsList["Theogenesis"] = {
    name : "Theogenesis",
    classes : ["Cleric", "Wizard", "Sorceror"],
    source : ["OotD", 55],
    level : 9,
    school : "conj",
    time : "1 hour",
    range : "touch",
    components : "V,S,M\u2020",
    compMaterial : "offerings worth at least 10,000 gp, which are consumed; all three Divine Artifacts: the Caduceus, the Ambrosia, and the Promethean fire",
    duration : "Special",
    ritual: false,
    description : "Create Divine Spark.",
    descriptionFull : "Theogenesis is a powerful spell that is used to place a divine spark into a mortal creature, unlocking the potential to ascend to godhood. The artifacts are not consumed when the spell is cast, but the offerings are.  Choose a single target (non-divine) creature for the spell. You must remain in contact with the target for the duration of the casting. If contact is broken, both you and the target take 20d6 radiant damage, and both the spell and the offering are wasted. If the spell is successfully cast, then one of the greater gods must decide whether or not to grant the divine spark. The creature's relationship with the god determines its chance of success, and the base chance is 0%. Each of the bonuses below are cumulative:" + "\n   " + "• The target shares at least one alignment axis with the greater god: +20%" + "\n   " + "• The target has the exact same alignment as the greater god: +20%" + "\n   " + "• The target has faithfully worshipped a god in the same pantheon for at least a year: +20%" + "\n   " + "•The target has faithfully worshipped the greater god for at least a year: +30%" + "\n   " + "Failure means that the greater god decides not to grant the divine spark. That greater god can’t be chosen again if the spell is cast on the same target. Success means that the target has been permanently granted a divine spark. It can only be removed with a wish spell."
};
//spells end
