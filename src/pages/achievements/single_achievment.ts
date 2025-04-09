import {Achievement_service} from "../../services/achievement_service.ts";
import {achievement} from "../../components/achievement/achievement.ts";
const achievement_service : Achievement_service = Achievement_service.getInstance()

export function single_achievement(achievement_name: string) :string{
    return achievement(achievement_service.achievements?.get(achievement_name)!);
}