export function getHealthStatusColor(status: string) {
  switch (status) {
    case "healthy":
      return "bg-green-500";
    case "injured":
      return "bg-red-500";
    case "sick":
      return "bg-yellow-500";
    case "recovering":
      return "bg-blue-500";
    case "unknown":
      return "bg-gray-500";
    default:
      return "bg-gray-500";
  }
}

export function healthStatus(status: string) {
  switch (status) {
    case "healthy":
      return "Bonne";
    case "injured":
      return "Blessée";
    case "sick":
      return "Malade";
    case "recovering":
      return "Se rétablit";
    case "unknown":
      return "Statut inconnu";
    default:
      return "bg-gray-500";
  }
}
