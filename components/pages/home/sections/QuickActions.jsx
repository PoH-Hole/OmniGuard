import Button from "../../../ui/Button";

export default function QuickActions({ showToast }) {
  return (
    <section className="flex flex-wrap gap-3 items-center justify-center">
      
      {/* MEDIC */}
      <Button
        className="bg-green-500 text-black"
        onClick={() =>
          showToast("🩺 Medic team dispatched!", "success")
        }
      >
        <span className="material-symbols-outlined text-sm">
          medical_services
        </span>
        Medic
      </Button>

      {/* APAR */}
      <Button
        className="bg-orange-600 text-white "
        onClick={() =>
          showToast("🔥 Fire suppression system ready!", "warning")
        }
      >
        <span className="material-symbols-outlined text-sm">
          warning
        </span>
        APAR
      </Button>

      {/* EMERGENCY */}
      <Button
        variant="danger"
        className=""
        onClick={() =>
          showToast("🚨 Production STOPPED!", "danger")
        }
      >
        <span className="material-symbols-outlined text-sm">
          emergency
        </span>
        Stop Production
      </Button>
    </section>
  );
}