export function getHealthStatusColor(status: string | null) {
  switch (status) {
    case "healthy":
      return "bg-green-200 border-green-200 text-green-700";
    case "injured":
      return "bg-red-500";
    case "sick":
      return "bg-orange-500";
    case "recovering":
      return "bg-blue-500";
    case "unknown":
      return "bg-gray-500";
    default:
      return "bg-gray-500";
  }
}

export function healthStatus(status: string | null) {
  switch (status) {
    case "healthy":
      return "Ok";
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
