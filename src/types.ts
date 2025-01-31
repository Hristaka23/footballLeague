export type Teams = {
    id: number;
    name: string;
    points: number;
    games_played: number;
    goals_for: number;
    goals_against: number;
    wins: number;
    draws: number;
    losses: number;
    goal_difference: number;
    group: string;
    img: string;
  };
  export type Schedule ={
    id_game: number;
    date:string;
    id_team1: number;
    id_team2: number;
    status: string;
    team1_score: number;
    team2_score: number;
    time:string;
    team1?: Teams;
    team2?: Teams;

  }