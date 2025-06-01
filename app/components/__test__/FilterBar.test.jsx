import { render, screen, fireEvent } from "@testing-library/react";
import FilterBar from "@/app/components/FilterBar";
import { TherapistContext } from "@/app/context/TherapistContext"; //get the therapists info

describe("FilterBar Component", () => {
  const mockFilters = {
    specialization: "",
    location: "",
    availability: "",
  };

  const mockSetFilters = jest.fn();

  const renderWithContext = () =>
    render(
      <TherapistContext.Provider
        value={{ filters: mockFilters, setFilters: mockSetFilters }}
      >
        <FilterBar />
      </TherapistContext.Provider>
    );

  it("renders all filter dropdowns", () => {
    renderWithContext();
    expect(screen.getByLabelText(/Specialization/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Location/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Availability/i)).toBeInTheDocument();
  });

  it("calls onFilterChange when a filter is changed", () => {
    renderWithContext();

    const specializationSelect = screen.getByLabelText(/Specialization/i);
    fireEvent.change(specializationSelect, { target: { value: "Anxiety" } });

    expect(mockSetFilters).toHaveBeenCalledWith({
      ...mockFilters,
      specialization: "Anxiety",
    });
  });
});
