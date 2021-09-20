export const xAxisTooltipFormatter = (time:number) => new Date(time).toLocaleDateString([], {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
}).replace(',', '');

export const xAxisTickFormatter = (time:string) => new Date(time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
