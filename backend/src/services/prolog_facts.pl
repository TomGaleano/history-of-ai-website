% Facts about the game world

% location(object, place)
location(desk, office).
location(safe, office).
location(book, library).
location(painting, gallery).

% content(object, content)
content(desk, 'A messy desk with a locked drawer.').
content(safe, 'A large safe. It requires a 3-digit combination.').
content(book, 'A book titled \'The History of Logic Programming\'. A small piece of paper is sticking out of it.').
content(painting, 'A beautiful painting of a landscape. There is a small inscription at the bottom.').

% combination_part(object, number)
combination_part(book, 7).
combination_part(painting, 3).
combination_part(desk, 1).

% Rules

% look(Place, Result) - lists objects in a place
look(Place, Objects) :- findall(Object, location(Object, Place), Objects).

% examine(Object, Result) - describes an object and its content
examine(Object, Content) :- content(Object, Content).

% goto(Place, Result) - changes the player's location
:- dynamic at/1.
at(office).

goto(Place, Result) :- retract(at(_)), asserta(at(Place)), swritef(Result, 'You are now in the %w.', [Place]).

open_safe(7, 3, 1, 'Congratulations! You have opened the safe and found the artifact!').
