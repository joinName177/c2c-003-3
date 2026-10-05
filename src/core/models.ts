export type SourceType = '文章' | '视频' | '播客' | '社交媒体' | '书籍';
export type NutritionType = '深度知识' | '行业动态' | '技能提升' | '娱乐消遣' | '社交信息';
export interface InfoEntry { id: string; title: string; source: SourceType; nutrition: NutritionType; minutes: number; date: string; note: string; }
export interface RecipeSnapshot { entries: InfoEntry[]; dailyGoal: number; }
export interface NutritionMetric { nutrition: NutritionType; minutes: number; share: number; target: number; color: string; icon: string; }
export interface SourceMetric { source: SourceType; minutes: number; share: number; target: number; color: string; icon: string; }
export const SOURCES: SourceType[] = ['文章', '视频', '播客', '社交媒体', '书籍'];
export const NUTRITION: NutritionType[] = ['深度知识', '行业动态', '技能提升', '娱乐消遣', '社交信息'];
export const NUTRITION_META: Record<NutritionType, { color: string; icon: string; target: number; hint: string }> = {
  深度知识: { color: '#e39c57', icon: '▰', target: 0.3, hint: '需要完整注意力的长内容' },
  行业动态: { color: '#5ca8b8', icon: '◌', target: 0.2, hint: '保持与世界同步' },
  技能提升: { color: '#8b91d1', icon: '↗', target: 0.2, hint: '可迁移的实践能力' },
  娱乐消遣: { color: '#d77484', icon: '✦', target: 0.15, hint: '有意识的放松' },
  社交信息: { color: '#72b47b', icon: '◎', target: 0.15, hint: '连接人与人的信息' },
};
export const SOURCE_META: Record<SourceType, { color: string; icon: string; target: number; hint: string }> = {
  文章: { color: '#cf9463', icon: '¶', target: 0.25, hint: '长文密集时记得留出消化时间，可以换一期播客让眼睛休息。' },
  视频: { color: '#c96f5f', icon: '▶', target: 0.2, hint: '连着刷视频容易被动消费，试着把一部分时间换成文章或书籍。' },
  播客: { color: '#7fa08c', icon: '♪', target: 0.15, hint: '听得多也要留时间输出，挑一期认真做三行笔记。' },
  社交媒体: { color: '#5f96ad', icon: '✳', target: 0.15, hint: '社媒占比过高会切碎注意力，建议集中在固定时段浏览。' },
  书籍: { color: '#9b8ec4', icon: '▤', target: 0.25, hint: '书籍很扎实，也别忘了补充行业动态和技能内容来交替。' },
};
