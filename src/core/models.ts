export type SourceType = '文章' | '视频' | '播客' | '社交媒体' | '书籍';
export type NutritionType = '深度知识' | '行业动态' | '技能提升' | '娱乐消遣' | '社交信息';
export interface InfoEntry { id: string; title: string; source: SourceType; nutrition: NutritionType; minutes: number; date: string; note: string; }
export interface RecipeSnapshot { entries: InfoEntry[]; dailyGoal: number; }
export interface NutritionMetric { nutrition: NutritionType; minutes: number; share: number; target: number; color: string; icon: string; }
export interface SourceMetric { source: SourceType; minutes: number; share: number; color: string; icon: string; }
export const SOURCES: SourceType[] = ['文章', '视频', '播客', '社交媒体', '书籍'];
export const NUTRITION: NutritionType[] = ['深度知识', '行业动态', '技能提升', '娱乐消遣', '社交信息'];
export const NUTRITION_META: Record<NutritionType, { color: string; icon: string; target: number; hint: string }> = {
  深度知识: { color: '#e39c57', icon: '▰', target: 0.3, hint: '需要完整注意力的长内容' },
  行业动态: { color: '#5ca8b8', icon: '◌', target: 0.2, hint: '保持与世界同步' },
  技能提升: { color: '#8b91d1', icon: '↗', target: 0.2, hint: '可迁移的实践能力' },
  娱乐消遣: { color: '#d77484', icon: '✦', target: 0.15, hint: '有意识的放松' },
  社交信息: { color: '#72b47b', icon: '◎', target: 0.15, hint: '连接人与人的信息' },
};
export const SOURCE_META: Record<SourceType, { color: string; icon: string; overHint: string }> = {
  文章: { color: '#c98a5e', icon: '文', overHint: '长文连读也会窄化视角，可以穿插播客或视频换一种节奏。' },
  视频: { color: '#d77484', icon: '视', overHint: '连着刷视频容易陷入被动推荐，建议设一个停止点，把部分时长换成文章或书籍。' },
  播客: { color: '#8b91d1', icon: '播', overHint: '只听播客容易停留在“听过”，可以挑一期做笔记，或找原文深读。' },
  社交媒体: { color: '#72b47b', icon: '社', overHint: '社交媒体占比过高通常意味着碎片刷屏，建议集中在固定时段查看，把空出的时间留给深度内容。' },
  书籍: { color: '#5ca8b8', icon: '书', overHint: '书籍虽好，也记得搭配行业动态，避免只消费出版周期较长的内容。' },
};
