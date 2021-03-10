//There's an algorithms tournament taking place in which teams of programmers compete against each other to solve algorithmic problems as fast as possible.Teams compete in a round robin, where each team faces off against all other teams. Only two teams compete against each other at a time, and for each competition, one team is designated the home team, while the other team is the away team. In each competition there's always one winner and one loser; there are no ties. A team receives 3 points if it wins and 0 points if it loses. The winner of the tournament is the team that receives the most amount of points.
// Given an array of pairs representing the team that have competed against each other and an array containing the results of each competition, write a function that returns the winner of the tournament. The input arrays are named competitions and results, respectively. The competitions array has elements in the form of [homeTeam, awayTeam], where each team is string of at most 30 characters representing the name of the team. The results array contains information about the winner of each corresponding competition in the competitions array.
// Specially, results[i] denotes the winner of  competition[i], where a 1 in results array means that the home team in the corresponding competition won and a 0 means that the away team won.
// Its guaranteed that exactly one team will win the tournament and that each team will compete against all other team exactly once. It’s also guaranteed that the tournament will always have at least two teams.

function tournamentWinner(competitions, results) {
	//Your code goes here
}

// tournamentWinner([["HTML", "C#"],
// 				["C#", "Python"],
//  				["Python", "HTML"]],[0, 0, 1])
//Expected Output : Python

// tournamentWinner([["HTML", "Java"],
//     ["Java", "Python"],
//     ["Python", "HTML"],
//     ["C#", "Python"],
//     ["Java", "C#"],
//     ["C#", "HTML"],
//     ["SQL", "C#"],
//     ["HTML", "SQL"],
//     ["SQL", "Python"],
//     ["SQL", "Java"]],[0, 1, 1, 1, 0, 1, 0, 1, 1, 0])
//Expected Output: C#
